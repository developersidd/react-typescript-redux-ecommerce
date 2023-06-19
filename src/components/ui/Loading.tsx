import spinner from "../../assets/images/spinner.gif";
const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <img className="w-20 lg:w-28" src={spinner} alt="" />
        </div>
    )
}
export default Loading
