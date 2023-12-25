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

interface Props {}

const App: FC<Props> = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle> 号号🐹</CardTitle>
          <CardDescription>一只紫仓（intp</CardDescription>
        </CardHeader>
        <CardContent>
          <p>生日 2023.10.05</p>
          <p>性别 弟弟</p>
          <p>星座 天秤座 ⚖️</p>
        </CardContent>
        <CardFooter>
          <Popover>
            <PopoverTrigger>
              <Badge variant="outline">🦊 @wj</Badge>
            </PopoverTrigger>
            <PopoverContent>找我：CowboyBebopSpike-</PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <Badge variant="outline">@听枫 🍨</Badge>
            </PopoverTrigger>
            <PopoverContent>联系我：qtf174</PopoverContent>
          </Popover>
        </CardFooter>
      </Card>
    </div>
  );
};

export default App;
