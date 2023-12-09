# Component Template

```typescript
import { twMerge } from 'tailwind-merge'

type ComponentProps = {

}

export default function Component({

}: ComponentProps) {
  return (
    <div
      className={twMerge(
        'shared styles',
        condition && 'conditional style'
      )}
    />
  )
}
```
