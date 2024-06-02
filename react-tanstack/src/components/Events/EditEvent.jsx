import { Link, useNavigate, useParams } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useMutation } from "@tanstack/react-query";
import { editEvent, queryClient } from "../../util/http.js";

export default function EditEvent() {
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: editEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["event"] });
      navigate(`/events/${id}`);
    },
  });

  function handleSubmit(formData) {
    mutation.mutate({ id, event: formData });
  }

  function handleClose() {
    navigate("../");
  }

  return (
    <Modal onClose={handleClose}>
      <EventForm inputData={null} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    </Modal>
  );
}
