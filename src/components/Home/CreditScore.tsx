type CreditScoreProps = {
  score: number;
  className?: string;
};

const DefaultOffset = 219.99078369140625;
const StrokeWidth = 4;

const getStrokeColor = (score: number): string => {
  if (score <= 50) return 'red';

  if (score > 50 && score < 75) return 'yellow';

  return 'green';
};

const CreditScore = ({ score, className }: CreditScoreProps) => {
  const offset = ((100 - score) / 100) * DefaultOffset * -1;
  const strokeColor = getStrokeColor(score);

  return (
    <svg
      viewBox="0 0 80 80"
      fill="black"
      className={`${className} bg-black rounded-full`}
    >
      <path
        strokeDasharray={DefaultOffset}
        strokeDashoffset={offset}
        d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0"
        stroke={strokeColor}
        style={{ transform: 'rotate(90deg) translate(0px, -80px)' }}
        strokeWidth={StrokeWidth}
      />
      <text
        className="value text-blue-500"
        x="50%"
        y="60%"
        fill="#fff"
        textAnchor="middle"
        fontSize="1.7rem"
      >
        {score}
      </text>
    </svg>
  );
};

export default CreditScore;
