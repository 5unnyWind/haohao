import { FC, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

const Haohao = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-10 filter grayscale">
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
          <p>2023.10.05 - 2023.12.27</p>
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
    </div>
  );
};

export default Haohao;
