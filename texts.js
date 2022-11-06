// Split a string by whitespace, only retaining non-empty elements
function words(text) {
    return () => text.split(/\s/).filter(e => e.length != 0)
}

// Each object has 'text' and 'from'. 'text' is a function which evaluates to a
// list of the words to type.
export default [
    {
        from: 'Dracula by Bram Stoker',
        text: words(`
        Oh, the terrible struggle that I
        have had against sleep so often of late; the pain of the sleeplessness,
        or the pain of the fear of sleep, with such unknown horrors as it has
        for me! How blessed are some people, whose lives have no fears, no
        dreads; to whom sleep is a blessing that comes nightly, and brings
        nothing but sweet dreams.
        `)
    },
    {
        from: 'The Great Gatsby by F. Scott Fitzgerald',
        text: words(`
        "Can't repeat the past?" he cried incredulously. "Why of course you
        can!"

        He looked around him wildly, as if the past were lurking here in the
        shadow of his house, just out of reach of his hand.
        `)
    },
    {
        from: 'Frankenstein; Or, The Modern Prometheus by Mary Wollstonecraft Shelley',
        text: words(`
        This state of mind preyed upon my health, which had perhaps never
        entirely recovered from the first shock it had sustained. I shunned the
        face of man; all sound of joy or complacency was torture to me;
        solitude was my only consolation - deep, dark, deathlike solitude.        
        `)
    },
    {
        from: 'Moby Dick; Or, The Whale by Herman Melville',
        text: words(`
        Whenever I find myself growing grim about the mouth; whenever it is a
        damp, drizzly November in my soul; whenever I find myself involuntarily
        pausing before coffin warehouses, and bringing up the rear of every
        funeral I meet; and especially whenever my hypos get such an upper hand
        of me, that it requires a strong moral principle to prevent me from
        deliberately stepping into the street, and methodically knocking
        people's hats off - then, I account it high time to get to sea as soon
        as I can.
        `)
    }
]