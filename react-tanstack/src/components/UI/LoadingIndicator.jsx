export default function LoadingIndicator({ isEventDetailContent, isCenter }) {
  return (
    <div
      className={`lds-ring ${isCenter ? "center" : null}`}
      id={isEventDetailContent ? "event-detail-content" : "null"}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
