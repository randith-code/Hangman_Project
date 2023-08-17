
type HangmanProps = {
    guessedLetters: string[],
    wordToGuess : string,
    reveal?: boolean
}

export const HangmanText = ({guessedLetters, wordToGuess, reveal = false} : HangmanProps) => {

    // const word:string = "test"
    // const guessedLetter = ["t","e","t"]

    return <div style={{
        display:'flex',
        gap:'.5rem',
        fontSize:'5rem',
        fontWeight:'bold',
        textTransform:'uppercase',
        fontFamily:'monospace'
    }}>
        {wordToGuess.split("").map((letter, index) => (
            <span style={{ borderBottom:"0.4rem solid black"}} key={index}>
                <span style={{
                    visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
                    color: !guessedLetters.includes(letter) && reveal ? "red" : "black" 
                }}>
                    {letter}
                </span>
            </span>
        ))}
    </div>
}