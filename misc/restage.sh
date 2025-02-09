rm content/*; python3 misc/get_notes.py; git restore content/index.md

echo "If all looks good, publish via: npx quartz sync"
