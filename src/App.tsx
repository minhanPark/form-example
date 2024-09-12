import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Basic } from "./form/basic";

function App() {
  return (
    <div className="flex justify-center mt-10">
      <Tabs defaultValue="basic-form" className="w-96">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="basic-form">Account</TabsTrigger>
          <TabsTrigger value="hook-form">Hook-form</TabsTrigger>
        </TabsList>
        <TabsContent value="basic-form">
          <Basic />
        </TabsContent>
        <TabsContent value="hook-form">aaaaa</TabsContent>
      </Tabs>
    </div>
  );
}

export default App;
