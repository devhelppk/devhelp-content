from words import count_words


def test_counts_simple_words():
    assert count_words("a b a") == {"a": 2, "b": 1}


def test_ignores_case_and_punctuation():
    assert count_words("Hello, hello! World.") == {"hello": 2, "world": 1}


def test_empty_text_has_no_words():
    assert count_words("") == {}


def test_multiple_spaces_do_not_create_empty_words():
    assert "" not in count_words("one  two")
