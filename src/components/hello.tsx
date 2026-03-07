import { Button } from "@/components/ui/button";
import { useBear, type BearState, Color, type ColorType } from "@/stores/index";

// 颜色对应的 Tailwind 类名
const colorClasses: Record<ColorType, string> = {
  red: 'bg-red-500 hover:bg-red-600',
  green: 'bg-green-500 hover:bg-green-600',
  blue: 'bg-blue-500 hover:bg-blue-600',
};

export default function Hello() {
  const bear: BearState = useBear();
  
  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-5xl font-bold mt-10">当前计数： {bear.bears}</h1>
      <p className="text-center text-gray-500 mt-2">测试部署 - 调试中</p>
      
      {/* 颜色切换按钮组 */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <span className="text-lg font-medium">选择颜色：</span>
        {(Object.keys(Color) as Array<keyof typeof Color>).map((key) => {
          const colorValue = Color[key];
          const isActive = bear.color === colorValue;
          return (
            <Button
              key={key}
              size="sm"
              className={`${colorClasses[colorValue]} text-white ${isActive ? 'ring-4 ring-offset-2 ring-gray-300' : ''}`}
              onClick={() => bear.changeColor(colorValue)}
            >
              {key}
            </Button>
          );
        })}
      </div>
      
      <div className="flex flex-col justify-center items-center gap-5 mt-10">
        <Button 
          size="lg"
          className={`w-full max-w-md h-16 text-xl text-center text-white ${colorClasses[bear.color]}`} 
          onClick={() => bear.increase()}
        >
          increase count
        </Button>
        <Button 
          size="lg"
          className={`w-full max-w-md h-16 text-xl text-center text-white ${colorClasses[bear.color]}`} 
          onClick={() => bear.decrease()}
        >
          decrease count
        </Button>
        <Button 
          size="lg"
          variant="outline"
          className="w-full max-w-md h-16 text-xl text-center"
          onClick={() => bear.reset()}
        >
          reset count
        </Button> 
      </div>
    </div>
  );
}
