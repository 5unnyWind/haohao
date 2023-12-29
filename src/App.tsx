import { FC, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./components/ui/popover";
import { Separator } from "./components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";
import { ModeToggle } from "./components/mode-toggle";

interface Props {}

const App: FC<Props> = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-10 filter grayscale">
      {/* <div className="absolute right-10 top-0">
        <ModeToggle/>
      </div> */}
      <Card>
        <CardHeader>
          <div className="bg-[#878F88] w-64 h-36 rounded-lg overflow-hidden mb-4 ">
            <img
              src="https://images-1305580547.cos.ap-guangzhou.myqcloud.com/IMG_4086%20%281%29.jpg"
              alt=""
            />
          </div>
          <Separator />
          <div className="mt-4"></div>
          <CardTitle> 号号🐹</CardTitle>
          <CardDescription>
            <p>一只紫仓（intp</p>
            <p>爱吃饭在减肥 白天睡觉</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>性别 爹</p>
          <p>籍贯 上海</p>
          <p>星座 天秤座 ⚖️</p>
          <p>生日 2023.10.05</p>
        </CardContent>
        <CardFooter>
          <Popover>
            <PopoverTrigger>
              <Badge variant="outline">🦊 @wj</Badge>
            </PopoverTrigger>
            <PopoverContent className="p-2">
              找我：CowboyBebopSpike-
            </PopoverContent>
          </Popover>
          <Separator orientation="vertical" />
          <Popover>
            <PopoverTrigger>
              <Badge variant="outline">@听枫 🍨</Badge>
            </PopoverTrigger>
            <PopoverContent className="p-2">联系我：qtf174</PopoverContent>
          </Popover>
        </CardFooter>
      </Card>
      <div className="mt-10"></div>
      <Card>
        <CardHeader>
          <div className="bg-[#878F88] w-64 h-64 rounded-lg overflow-hidden mb-4 ">
            <img
              src="https://images-1305580547.cos.ap-guangzhou.myqcloud.com/IMG_4088%20%281%29.jpg"
              alt=""
            />
          </div>
          <Separator />
          <div className="mt-4"></div>
          <CardTitle> 粉猴子🐒</CardTitle>
          <CardDescription>一条六角恐龙（好好的呆呆邻居</CardDescription>
        </CardHeader>
        <CardContent>
          <p>性别 ？？？</p>
          <p>籍贯 ？？？</p>
          <p>星座 ？？？</p>
          <p>生日 ？？？</p>
        </CardContent>
        <CardFooter>
          <Popover>
            <PopoverTrigger>
              <Badge variant="outline">@小岛</Badge>
            </PopoverTrigger>
            <PopoverContent className="p-2">找我：nutssea0401</PopoverContent>
          </Popover>
          <Separator orientation="vertical" />
          <Popover>
            <PopoverTrigger>
              <Badge variant="outline">@qbq</Badge>
            </PopoverTrigger>
            <PopoverContent className="p-2">联系我：？？？</PopoverContent>
          </Popover>
        </CardFooter>
      </Card>
    </div>
  );
};

export default App;
