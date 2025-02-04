const MessageContainer = ({ messages }) => {
    return (
        <div>
            <table striped bordered>
                <tbody>
                    {
                        messages.map((msg, index) =>
                            <tr key={index}>
                                <td>{msg.msg} - {msg.username}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}
export default MessageContainer;