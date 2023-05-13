export default function Navbar() {
    return (
        <nav className={`
            py-5 
            flex justify-between items-center 
            text-white
        `}>
            <div className='flex'>
                <p className='font-Oswald'>
                    Freud
                </p>
                <p className='mx-1'>
                    |
                </p>
                <p className='font-DM text-secondary'>
                    Psychoanalysis
                </p>
            </div>
            <ul>
            </ul>
        </nav>
    )
}