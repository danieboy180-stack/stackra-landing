import { Container } from '@/components/section-heading';

const PROOF = [
  { title: 'WhatsApp-first', body: 'Orders land in the chat you already use.' },
  { title: 'One link', body: 'Your whole catalog, shareable anywhere.' },
  { title: 'Simple setup', body: 'Add your products and go live.' },
  { title: 'Built in Abuja', body: 'For merchants across Africa.' },
];

export default function ProofStrip() {
  return (
    <section aria-label='Why Stackra' className='mt-20 border-y border-border'>
      <Container>
        <ul className='grid grid-cols-2 gap-px bg-border lg:grid-cols-4'>
          {PROOF.map((p) => (
            <li key={p.title} className='bg-background px-1 py-6 sm:px-6'>
              <p className='font-medium'>{p.title}</p>
              <p className='mt-1 text-sm text-muted-foreground'>{p.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
