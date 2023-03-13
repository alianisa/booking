import { Button } from '@/shared/ui/button'
import { IconButton } from '@/shared/ui/icon-button'
import { Input } from '@/shared/ui/input'
import { ReactNode } from 'react'

export default function Playground() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center pt-20">
      <Block title="Buttons:">
        <div className="flex items-center gap-4">
          <Button variant="primary" size="sm" disabled>
            Disabled
          </Button>
          <Button size="sm">Primary</Button>
          <Button size="md">Primary</Button>
          <Button size="lg">Primary</Button>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="secondary" size="sm" disabled>
            Disabled
          </Button>
          <Button variant="secondary" size="sm">
            Secondary
          </Button>
          <Button variant="secondary" size="md">
            Secondary
          </Button>
          <Button variant="secondary" size="lg">
            Secondary
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Button leftIcon={<SettingsIcon />} variant="primary" size="sm" disabled>
            Disabled
          </Button>
          <Button leftIcon={<SettingsIcon />} size="sm">
            Primary
          </Button>
          <Button leftIcon={<SettingsIcon />} size="md">
            Primary
          </Button>
          <Button leftIcon={<SettingsIcon />} size="lg">
            Primary
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Button rightIcon={<SettingsIcon />} variant="secondary" size="sm" disabled>
            Disabled
          </Button>
          <Button variant="secondary" rightIcon={<SettingsIcon />} size="sm">
            Primary
          </Button>
          <Button variant="secondary" rightIcon={<SettingsIcon />} size="md">
            Primary
          </Button>
          <Button variant="secondary" rightIcon={<SettingsIcon />} size="lg">
            Primary
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <IconButton icon={<SettingsIcon />} variant="secondary" size="sm" disabled />
          <IconButton icon={<SettingsIcon />} variant="secondary" size="sm" />
          <IconButton icon={<SettingsIcon />} variant="secondary" size="md" />
          <IconButton icon={<SettingsIcon />} variant="secondary" size="lg" />
        </div>
      </Block>
      <Block title="Inputs:">
        <div className="flex items-center gap-4">
          <Input size="sm" name="sm1" label="Label" placeholder="small size" error="This is an error message." />
          <Input size="sm" name="sm2" label="Label" placeholder="small size" hint="This is a hint text to help user." />
          <Input
            size="sm"
            name="sm3"
            label="Label"
            placeholder="small size"
            hint="This is a hint text to help user."
            disabled
          />
        </div>
        <div className="flex items-center gap-4">
          <Input name="md1" label="Label" placeholder="medium size" error="This is an error message." />
          <Input name="md2" label="Label" placeholder="medium size" hint="This is a hint text to help user." />
          <Input name="md3" label="Label" placeholder="medium size" hint="This is a hint text to help user." disabled />
        </div>
        <div className="flex items-center gap-4">
          <Input
            name="filled1"
            label="Label"
            placeholder="medium size"
            error="This is an error message."
            variant="filled"
          />
          <Input
            name="filled2"
            label="Label"
            placeholder="medium size"
            hint="This is a hint text to help user."
            variant="filled"
          />
          <Input
            name="filled3"
            label="Label"
            placeholder="medium size"
            hint="This is a hint text to help user."
            disabled
            variant="filled"
          />
        </div>
        <div className="flex items-center gap-4">
          <Input
            name="search1"
            label="Label"
            placeholder="leftElement"
            error="This is an error message."
            variant="filled"
            leftElement={<SettingsIcon />}
          />
          <Input
            name="search2"
            label="Label"
            placeholder="rightElement"
            hint="This is a hint text to help user."
            variant="filled"
            rightElement={<SettingsIcon />}
          />
          <Input
            name="search3"
            label="Label"
            placeholder="rightElement"
            hint="This is a hint text to help user."
            disabled
            variant="filled"
            rightElement={<>test</>}
          />
        </div>
      </Block>
    </div>
  )
}

const Block = ({ title, children }: { title?: string; children: ReactNode }) => {
  return (
    <div className="flex flex-col gap-2 ">
      <h2 className="text-lg font-bold">{title}</h2>
      {children}
    </div>
  )
}

const SettingsIcon = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}
