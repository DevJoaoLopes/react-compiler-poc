interface IHeader {
    message: string
}

export default function Header({message}: Readonly<IHeader>) {
    console.log('render')
    return (
        <div className="Header">
        <h1>{message}</h1>
        </div>
    );
}
