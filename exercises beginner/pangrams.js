function pangram(string) {
    for (i = 97; i < 123; i++) {
        if (!string.toLowerCase().includes(String.fromCharCode(i))) {
            return false
        };
    }
    return true;
}

console.log(pangram("Crwth vox zaps qi gym fjeld bunk. (The sound of a Celtic violin strikes an eastern spiritual forces-focused fitness center situated in a barren plateau of Scandinavia.) This one is all Scrabble legal words!"))
console.log(pangram("This is not a pangram!"))