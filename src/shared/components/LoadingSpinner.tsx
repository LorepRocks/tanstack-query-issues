import { FiRefreshCcw } from "react-icons/fi"

export const LoadingSpinner = () => {
    return (
        <div className="loading">
            <div className="animate-spin">
                <FiRefreshCcw/>
            </div>
        </div>
    )
}