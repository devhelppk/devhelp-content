import re


def count_words(text: str) -> dict[str, int]:
    counts: dict[str, int] = {}
    for word in re.findall(r"[a-z0-9']+", text.lower()):
        counts[word] = counts.get(word, 0) + 1
    return counts
