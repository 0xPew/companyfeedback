import FeedbackItem from "./FeedbackItem";

const feedbackItems = [
  {
    upvoteCount: 234,
    badgeLetter: "P",
    companyName: "Pew",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rem laboriosam, architecto sit blanditiis dolor?",
    daysAgo: 4,
  },
  {
    upvoteCount: 143,
    badgeLetter: "Z",
    companyName: "Zus",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, voluptate a tempora repellat adipisci sequi.",
    daysAgo: 7,
  },
];

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      {feedbackItems.map((feedbackItem, index) => (
        <FeedbackItem key={index} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
