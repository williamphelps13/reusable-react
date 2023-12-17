# Component Template

```typescript
import { twMerge } from 'tailwind-merge'

type ComponentProps = {
  cId: string,
  className: string,
}

export default function Component({ cId, className }: ComponentProps) {
  return (
    <div
      className={twMerge()}
    >
    </div>
  )
}
```
