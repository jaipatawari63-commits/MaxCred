"""Basic integrity checks for MaxCred CSV data."""
from pathlib import Path
import sys
import pandas as pd

REQUIRED_CARD_COLUMNS = {
    "Issuer", "Card Name", "Annual Fee", "Joining Fee", "Fee Waiver",
    "Base Reward Rate", "Accelerated Reward", "Cashback Rate", "Cashback Cap",
    "Reward Cap", "Reward Point Value", "Exclusions", "Status", "Source",
    "Verified Date", "Verification Status"
}


def main() -> None:
    data_dir = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("data")
    card_file = data_dir / "Card_Master.csv"
    if not card_file.exists():
        print("Card_Master.csv not present; schema validation skipped.")
        return
    df = pd.read_csv(card_file)
    missing = REQUIRED_CARD_COLUMNS - set(df.columns)
    if missing:
        raise SystemExit(f"Missing required columns: {sorted(missing)}")
    duplicate_keys = df.duplicated(["Issuer", "Card Name"], keep=False)
    if duplicate_keys.any():
        print("WARNING: duplicate issuer/card names detected; term versions should use effective dates.")
    if (df["Verification Status"].fillna("").str.lower() == "verified").sum() == 0:
        print("WARNING: no fully verified cards found.")
    print(f"Validated {len(df)} card rows and {len(df.columns)} columns.")


if __name__ == "__main__":
    main()
