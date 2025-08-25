import { Download, LoaderCircle, Mail } from "lucide-react";
import TransactionInfoCard from "./TransactionInfoCard.jsx";
import moment from "moment";
import { useState } from "react";

const IncomeList = ({ transactions, onDelete, onDownload, onEmail }) => {
    const [emailing, setEmailing] = useState(false);
    const [downloading, setDownloading] = useState(false);

    const handleEmail = async () => {
        setEmailing(true);
        try {
            await onEmail();
        } finally {
            setEmailing(false);
        }
    };

    const handleDownload = async () => {
        setDownloading(true);
        try {
            await onDownload();
        } finally {
            setDownloading(false);
        }
    };

    return (
        <div className="card">
            <div className="flex items-center justify-between">
                <h5 className="text-lg">Income Sources</h5>
                <div className="flex items-center justify-end gap-2">
                    <button
                        disabled={emailing}
                        className="card-btn flex items-center gap-1"
                        onClick={handleEmail}
                    >
                        {emailing ? (
                            <>
                                <LoaderCircle className="w-4 h-4 animate-spin" />
                                Emailing...
                            </>
                        ) : (
                            <>
                                <Mail size={15} className="text-base" />
                                Email
                            </>
                        )}
                    </button>

                    <button
                        disabled={downloading}
                        className="card-btn flex items-center gap-1"
                        onClick={handleDownload}
                    >
                        {downloading ? (
                            <>
                                <LoaderCircle className="w-4 h-4 animate-spin" />
                                Downloading...
                            </>
                        ) : (
                            <>
                                <Download size={15} className="text-base" />
                                Download
                            </>
                        )}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* display the incomes */}
                {transactions?.map((income) => (
                    <TransactionInfoCard
                        key={income.id}
                        title={income.name}
                        icon={income.icon}
                        date={moment(income.date).format("Do MMM YYYY")}
                        amount={income.amount}
                        type="income"
                        onDelete={() => onDelete(income.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default IncomeList;
