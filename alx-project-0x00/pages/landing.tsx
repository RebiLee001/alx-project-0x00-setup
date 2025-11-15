import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-extralight">Landing Page</h1>

      {/* Render Cards */}
      <Card />
      <Card />

      {/* Buttons with required shapes */}
      <div className="flex gap-4 mt-4">
        <Button title="Small Button" styles="rounded-sm text-sm" />
        <Button title="Medium Button" styles="rounded-md text-base" />
        <Button title="Large Button" styles="rounded-full text-lg" />
        <Button title="Extra Large Button" styles="rounded-lg text-xl" /> {/* Added rounded-lg */}
      </div>
    </div>
  );
};

export default Landing;

