// Split a string by whitespace, only retaining non-empty elements
function words(text) {
    return () => text.split(/\s/).filter(e => e.length != 0)
}

// Each object has 'text' and 'from'. 'text' is a function which evaluates to a
// list of the words to type.
export default [
    {
        from: 'Ayman\'s brain',
        text: words('I\'m a monkey. Ooh ooh ah ah.')
    },
    {
        from: 'Moby Dick; Or, The Whale by Herman Melville',
        text: words(`
            Whenever I find myself growing grim about the mouth; whenever it is
            a damp, drizzly November in my soul; whenever I find myself
            involuntarily pausing before coffin warehouses, and bringing up the
            rear of every funeral I meet; and especially whenever my hypos get
            such an upper hand of me, that it requires a strong moral principle
            to prevent me from deliberately stepping into the street, and
            methodically knocking people's hats off - then, I account it high
            time to get to sea as soon as I can.
        `)
    }
]