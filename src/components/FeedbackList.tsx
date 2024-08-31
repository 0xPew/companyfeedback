import { TriangleUpIcon } from "@radix-ui/react-icons";

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>543</span>
        </button>
        <div>
          <p>P</p>
        </div>
        <div>
          <p>Pew</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rem
            laboriosam, architecto sit blanditiis dolor?
          </p>
        </div>
        <p>4d</p>
      </li>
    </ol>
  );
}
