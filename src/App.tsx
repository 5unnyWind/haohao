import { FC, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {}

const App: FC<Props> = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle> 号号🐹</CardTitle>
          <CardDescription>一只紫仓（ins/tp</CardDescription>
        </CardHeader>
        <CardContent>
          <p>生日 2023.10.05</p>
          <p>性别 弟弟</p>
          <p>星座 天秤座 ⚖️</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
