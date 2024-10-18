function SuccessToast({ message }: { message: string }) {
    return (
        <div className="h-full w-full flex items-center">
            <div className="h-full w-auto">
                <img src="/icons/tick.png" alt="" />
            </div>
            <div className="h-full flex items-center ml-2">{message}</div>
        </div>
    );
}

export default SuccessToast;