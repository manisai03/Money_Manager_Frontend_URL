import moment from "moment";
import { Download, Mail, Loader2 } from "lucide-react";
import TransactionInfoCard from "./TransactionInfoCard.jsx";

const ExpenseList = ({ transactions, onDelete, onDownload, onEmail, downloading, emailing }) => {
    return (
        <div className="card">
            <div className="flex items-center justify-between">
                <h5 className="text-lg">All Expenses</h5>
                <div className="flex items-center justify-end gap-2">
                    <button
                        className="card-btn flex items-center gap-1 disabled:opacity-50"
                        onClick={onEmail}
                        disabled={emailing}
                    >
                        {emailing ? <Loader2 size={15} className="animate-spin" /> : <Mail size={15} />}
                        {emailing ? "Sending..." : "Email"}
                    </button>

                    <button
                        className="card-btn flex items-center gap-1 disabled:opacity-50"
                        onClick={onDownload}
                        disabled={downloading}
                    >
                        {downloading ? <Loader2 size={15} className="animate-spin" /> : <Download size={15} />}
                        {downloading ? "Downloading..." : "Download"}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                {transactions?.map((expense) => (
                    <TransactionInfoCard
                        key={expense.id}
                        title={expense.name}
                        icon={expense.icon}
                        date={moment(expense.date).format("Do MMM YYYY")}
                        amount={expense.amount}
                        type="expense"
                        onDelete={() => onDelete(expense.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ExpenseList;
