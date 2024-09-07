import mmap  # For checking files for the publish string without loading the whole thing into memory.
import os
import shutil  # For copying files.
from paths import VAULT_PATH, REPO_PATH  # Private. VAULT_PATH just contains the path to my Obsidian vault root directory. REPO_PATH is the path to this repo.


VAULT_EVERGREEN_PATH = os.fsencode(VAULT_PATH + "/Evergreen Thoughts")
REPO_NOTES_PATH = os.fsencode(REPO_PATH + "/content/notes")  # Notes is where I'll serve Evergreen Thoughts from. Nesting it further makes the URL weird.
# TODO: Figure out how to make attachments (pics) work. I might need to nest that directory.

def file_contains_tag(filename, tag):
    """Checks whether a file contains a tag.

    set() is fine because Obsidian markdown files always fit into memory.
    If that ever changes, seek an mmap implementation.
    """

    f = open(filename, "r")
    strings = set(f.read().split())  # Use split() not splitline() because Obsidian tags often have trailing whitespace
    return tag in strings


files_scanned, count_publish, count_nopublish = 0, 0, 0

for file_path in os.listdir(VAULT_EVERGREEN_PATH):
    filename = os.fsdecode(file_path)
    full_path = os.path.join(VAULT_EVERGREEN_PATH, file_path)
    
    if filename.endswith(".md"):  # Filters out .DS_Store etc.
        files_scanned += 1
        if file_contains_tag(full_path, "#publish"):
            count_publish += 1
            print("PUBLISH", filename)
            shutil.copy2(full_path, REPO_NOTES_PATH)
        else:
            count_nopublish += 1
            print("SKIPPED", filename)


print("===========")
print("Finished!")
print("- files_scanned:", files_scanned)
print("- count_publish:", count_publish)
print("- count_nopublish:", count_nopublish)

# Next, do another pass for safety that deletes any files that have nopublish or maybepublish in them.
files_scanned, count_left_alone, count_removed = 0, 0, 0

for file_path in os.listdir(REPO_NOTES_PATH):
    filename = os.fsdecode(file_path)
    full_path = os.path.join(REPO_NOTES_PATH, file_path)
    
    if filename.endswith(".md"):  # Filters out .DS_Store etc.
        files_scanned += 1
        if file_contains_tag(full_path, "#nopublish"):
        	# TODO: Make this also do #maybepublish
            count_removed += 1
            print("REMOVED", filename)
            os.remove(full_path)
        else:
            count_left_alone += 1
            # Usually they are left alone so no need to write them all
            # print("LEFT AL", filename)

print("===========")
print("Finished!")
print("- files_scanned:", files_scanned)
print("- count_removed:", count_removed)
print("- count_left_alone:", count_left_alone)

# TODO: Write a method that copies image attachments based on whether they were referenced in the markdown file.
