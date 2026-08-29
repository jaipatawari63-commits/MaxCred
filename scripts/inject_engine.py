from pathlib import Path
p=Path('app/index.html')
s=p.read_text(encoding='utf-8')
# Keep the demo focused on general spend categories; Airtel-specific billing is handled by card economics rather than exposed as a dedicated spend input.
s=s.replace("'Online / shopping','Dining','Travel','Utilities / bills','Fuel','Airtel bills','UPI','Other'", "'Online / shopping','Dining','Travel','Utilities / bills','Fuel','UPI','Other'")
if 'data/demo-cards.js' not in s:
    s=s.replace('</body>','<script src="data/demo-cards.js"></script>\n<script src="app/maxcred-engine.js"></script>\n</body>')
p.write_text(s,encoding='utf-8')
print('MaxCred engine wired and Airtel-specific spend input removed')
