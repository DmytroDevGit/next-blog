type Props = {
  bgColor?: 'gray' | 'yellow' | 'blue' | 'green' | 'red',
  opacity?: 10 | 20 | 30 | 40| 50 | 60 | 70 | 80 | 90 | 100
}

export default function Overlay({...props }: Props) {
  const { bgColor = 'gray', opacity = '60' } = props;

  const colorVariants = {
    gray: "bg-gray-400",
    blue: "bg-blue-400",
    red: "bg-red-400",
    green: "bg-green-400",
    yellow: "bg-yellow-400",
  };

  const opacityVariants = {
    10: "opacity-10",
    20: "opacity-20",
    30: "opacity-30",
    40: "opacity-40",
    50: "opacity-50",
    60: "opacity-60",
    70: "opacity-70",
    80: "opacity-80",
    90: "opacity-90",
    100: "opacity-100",
  };

  return (
    <div className={`absolute left-0 top-0 w-full bg h-full ${colorVariants[bgColor]} ${opacityVariants[opacity]}`}></div>
  )
}
