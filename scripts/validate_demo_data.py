from pathlib import Path
import re
root=Path(__file__).resolve().parents[1]
js=(root/'data'/'demo-cards.js').read_text(encoding='utf-8')
for key in ['id','issuer','name','recommendationReady','verifiedDate','fees','rewards','source']:
    assert key in js, f'missing required field: {key}'
assert 'waiverThreshold' in js
assert 'exclusions' in js
assert js.count('recommendationReady: true') >= 3
assert len(re.findall(r"https://[^'\"]+",js)) >= 3
print('MaxCred demo data validation passed')
