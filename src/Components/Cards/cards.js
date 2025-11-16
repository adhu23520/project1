import './cards.css'

export default function cards(){
    return(
        <div>
            <div className='cards'>
                <p className='cardsText'>Email ID:</p>
                <p className='cardsText'>Company: <span className='result'>Accepted</span></p>
                <p className='cardsText'>Decision:</p>
            </div>

            <div className='cards'>
                <p className='cardsText'>Email ID:</p>
                <p className='cardsText'>Company: <span className='result'>Rejected</span></p>
                <p className='cardsText'>Decision:</p>
            </div>

            <div className='cards'>
                <p className='cardsText'>Email ID:</p>
                <p className='cardsText'>Company: <span className='result'>Assessment</span></p>
                <p className='cardsText'>Decision:</p>
            </div>

            <div className='cards'>
                <p className='cardsText'>Email ID:</p>
                <p className='cardsText'>Company: <span className='result'>Interview</span></p>
                <p className='cardsText'>Decision:</p>
            </div>
        </div>

    )
}