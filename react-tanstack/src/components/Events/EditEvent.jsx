import { Link, useNavigate, useParams } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchEvent, queryClient, updateEvent } from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const params = useParams();

  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: updateEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["event", params.id] });
    },
  });

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["event", params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });

  function handleSubmit(formData) {
    mutation.mutate({ id: params.id, event: formData });
    navigate("../");
  }

  function handleClose() {
    navigate("../");
  }
  let content;
  if (isPending) {
    content = (
      <div className="center">
        <LoadingIndicator />
      </div>
    );
  }

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="Failed To load event"
          message={
            error.info?.message ||
            "Failed To Load Event. Please Check INputs and try again"
          }
        />
        <div className="form-actions">
          <Link to="../" className="button">
            Okay
          </Link>
        </div>
      </>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}
