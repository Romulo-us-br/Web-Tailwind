import {ArrowRight, Copy} from 'lucide-react';
import { Button } from "@/components/button";
import { IconButton } from '@/components/icon-button';

export default function Home() {
  return (
    <main>
      <Button type="submit">
        Enviar
        <ArrowRight/>
      </Button>
      <Button>
        Clara
        <ArrowRight/>
      </Button>
  <IconButton>
    <Copy/>
  </IconButton>
  <div>
    <input type="email"/>
  </div>
  
    </main>
  );
}
