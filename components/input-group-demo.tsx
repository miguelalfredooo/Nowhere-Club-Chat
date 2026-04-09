"use client"

import { ArrowUpIcon, Plus, Search } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { Separator } from "@/components/ui/separator"

interface InputGroupDemoProps {
  onFocus?: () => void
  onBlur?: () => void
}

export function InputGroupDemo({ onFocus, onBlur }: InputGroupDemoProps) {
  return (
    <div className="flex w-full justify-center">
      <div className="w-full max-w-2xl">
        <InputGroup>
          <InputGroupTextarea
            placeholder="Ask, Search or Chat..."
            onFocus={onFocus}
            onBlur={onBlur}
          />
          <InputGroupAddon align="block-end">
            <InputGroupButton
              variant="outline"
              className="rounded-full"
              size="icon-xs"
            >
              <Plus className="size-4" />
            </InputGroupButton>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="inline-flex items-center justify-center rounded px-2 text-sm font-medium hover:bg-accent cursor-pointer">
                  Auto
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                align="start"
                className="[--radius:0.95rem]"
              >
                <DropdownMenuItem>Auto</DropdownMenuItem>
                <DropdownMenuItem>Agent</DropdownMenuItem>
                <DropdownMenuItem>Manual</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <InputGroupText className="ml-auto">52% used</InputGroupText>
            <Separator orientation="vertical" className="h-4!" />
            <InputGroupButton
              variant="default"
              className="rounded-full"
              size="icon-xs"
            >
              <ArrowUpIcon className="size-4" />
              <span className="sr-only">Send</span>
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  )
}
