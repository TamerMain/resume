import { useEffect } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";
import useHttp from "../components/hooks/use-http";
import { addQuote } from "../components/lib/api";

const NewQuote = () => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") {
      history.push("/14/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler}></QuoteForm>;
};

export default NewQuote;
