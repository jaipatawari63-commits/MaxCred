"""Export the MaxCred Excel master into CSV datasets.

Usage:
    python scripts/parse_workbook.py path/to/master.xlsx data/

The script intentionally exports sheets as-is. It does not invent missing values or
silently transform reward mechanics. Date-effective term versions should be kept in
separate sheets/files.
"""
from pathlib import Path
import re
import sys
import pandas as pd


def safe_name(name: str) -> str:
    return re.sub(r"[^A-Za-z0-9_-]+", "_", name).strip("_") or "sheet"


def main() -> None:
    if len(sys.argv) != 3:
        raise SystemExit("Usage: python scripts/parse_workbook.py <xlsx> <output_dir>")
    workbook = Path(sys.argv[1])
    output_dir = Path(sys.argv[2])
    output_dir.mkdir(parents=True, exist_ok=True)

    sheets = pd.ExcelFile(workbook).sheet_names
    for sheet in sheets:
        df = pd.read_excel(workbook, sheet_name=sheet)
        df.to_csv(output_dir / f"{safe_name(sheet)}.csv", index=False, encoding="utf-8-sig")
        print(f"exported {sheet} -> {safe_name(sheet)}.csv ({len(df)} rows)")


if __name__ == "__main__":
    main()
