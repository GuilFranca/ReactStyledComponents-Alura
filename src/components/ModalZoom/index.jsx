const ModalZoom = ({ foto }) => {
    return (
        <>
            <dialog open={!!foto}>
                <p>{foto?.titulo}</p>
                <form method="dialog">
                    <button type="submit">ok</button>
                </form>
            </dialog>
        </>
    )
}

export default ModalZoom