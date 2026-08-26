"""MaxCred visual theme source of truth.

Keeps the approved visual palette documented in Python so future UI work can
reuse the same values instead of scattering colour choices across files.
"""

PALETTE = {
    "navy": "#071A31",
    "navy_2": "#0D2947",
    "teal": "#00A79D",
    "aqua": "#4EDBD0",
    "gold": "#D4AF37",
    "gold_light": "#F3D77A",
    "paper": "#F7F9FC",
    "ink": "#10243D",
    "muted": "#64748B",
    "line": "#DCE6EE",
}

# The design intent: deep navy for trust, restrained teal for intelligence,
# and metallic gold for premium value. Keep backgrounds textured/subtle,
# never visually noisy, and maintain accessible contrast.

if __name__ == "__main__":
    for name, value in PALETTE.items():
        print(f"{name:12} {value}")
