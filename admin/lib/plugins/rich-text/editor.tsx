import { Component, HasOne } from "@contember/interface";
import {
  EditorElementTrigger,
  EditorGenericTrigger,
  EditorMarkTrigger,
  EditorReferenceTrigger,
  anchorElementType,
  boldMark,
  codeMark,
  createAlignHandler,
  headingElementType,
  highlightMark,
  horizontalRuleElementType,
  italicMark,
  orderedListElementType,
  paragraphElementType,
  scrollTargetElementType,
  strikeThroughMark,
  tableElementType,
  underlineMark,
  unorderedListElementType,
} from "@contember/react-slate-editor";
import {
  BlockEditorField as BlockEditorFieldBase,
  BlockEditorFieldProps as BlockEditorFieldPropsBase,
  EditorBlock,
  EditorBlockContent,
  EditorBlockToolbar,
  EditorInlineToolbar,
} from "@app/lib/editor";
import { Toggle } from "@app/lib/ui/toggle";
import { uic } from "@app/lib/utils";
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  CodeIcon,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  HighlighterIcon,
  ImageIcon,
  Images,
  Instagram,
  InstagramIcon,
  ItalicIcon,
  Link2Icon,
  ListIcon,
  ListOrderedIcon,
  PilcrowIcon,
  QuoteIcon,
  StrikethroughIcon,
  TableIcon,
  UnderlineIcon,
} from "lucide-react";
import { ImageField, InputField } from "@app/lib/form";
import {
  DefaultRepeater,
  RepeaterItemActions,
  RepeaterRemoveItemButton,
} from "@app/lib/repeater";
import { RichText } from "@app/components/rich-text";

export interface BlockEditorFieldProps {
  field: BlockEditorFieldPropsBase["field"];
  referencesField: BlockEditorFieldPropsBase["referencesField"];
  label?: string;
}

const BlockButton = uic("button", {
  baseClass:
    "bg-white p-2 inline-flex flex-col hover:bg-gray-100 border rounded-md w-32 items-center justify-center",
});

export const BlockEditorField = Component(
  ({ field, referencesField, label }: BlockEditorFieldProps) => (
    <div className="mr-4 flex flex-col gap-2">
      {label && <div>{label}</div>}
      <BlockEditorFieldBase
        field={field}
        referencesField={referencesField}
        referenceDiscriminationField="type"
        plugins={
          [
            // Example how to register custom plugin
            // editor => {
            // 	editor.registerElement({
            // 		type: 'link',
            // 		isInline: true,
            // 		render: LinkElement,
            // 	})
            // },
          ]
        }
      >
        <EditorBlockToolbar>
          <EditorReferenceTrigger referenceType="image">
            <BlockButton>
              <ImageIcon /> Image
            </BlockButton>
          </EditorReferenceTrigger>
          <EditorReferenceTrigger referenceType="imageList">
            <BlockButton>
              <Images /> Image list
            </BlockButton>
          </EditorReferenceTrigger>
          <EditorReferenceTrigger referenceType="quote">
            <BlockButton>
              <QuoteIcon /> Quote
            </BlockButton>
          </EditorReferenceTrigger>
          <EditorElementTrigger elementType={tableElementType}>
            <BlockButton>
              <TableIcon /> Table
            </BlockButton>
          </EditorElementTrigger>
          <EditorReferenceTrigger referenceType="instagramEmbed">
            <BlockButton>
              <Instagram /> Instagram
            </BlockButton>
          </EditorReferenceTrigger>
          {/* <EditorElementTrigger elementType={scrollTargetElementType}>
            <BlockButton>
              <LocateIcon /> Scroll target
            </BlockButton>
          </EditorElementTrigger> */}
          {/* Horizontal rule elements */}
          {/* <EditorElementTrigger elementType={horizontalRuleElementType}>
            <BlockButton>
              <MinusIcon /> Horizontal rule
            </BlockButton>
          </EditorElementTrigger> */}
        </EditorBlockToolbar>
        <EditorInlineToolbar>
          <div>
            <EditorMarkTrigger mark={boldMark}>
              <Toggle>
                <BoldIcon className="h-3 w-3" />
              </Toggle>
            </EditorMarkTrigger>
            <EditorMarkTrigger mark={italicMark}>
              <Toggle>
                <ItalicIcon className="h-3 w-3" />
              </Toggle>
            </EditorMarkTrigger>
            <EditorMarkTrigger mark={underlineMark}>
              <Toggle>
                <UnderlineIcon className="h-3 w-3" />
              </Toggle>
            </EditorMarkTrigger>
            <EditorMarkTrigger mark={strikeThroughMark}>
              <Toggle>
                <StrikethroughIcon className="h-3 w-3" />
              </Toggle>
            </EditorMarkTrigger>
            <EditorMarkTrigger mark={highlightMark}>
              <Toggle>
                <HighlighterIcon className="h-3 w-3" />
              </Toggle>
            </EditorMarkTrigger>
            <EditorMarkTrigger mark={codeMark}>
              <Toggle>
                <CodeIcon className="h-3 w-3" />
              </Toggle>
            </EditorMarkTrigger>
            <EditorElementTrigger elementType={anchorElementType}>
              <Toggle>
                <Link2Icon className="h-3 w-3" />
              </Toggle>
            </EditorElementTrigger>
            {/*<Popover>*/}
            {/*	<PopoverTrigger asChild>*/}
            {/*		<Toggle><LinkIcon className="h-3 w-3" /></Toggle>*/}
            {/*	</PopoverTrigger>*/}
            {/*	<PopoverContent>*/}
            {/*		<EditorInlineReferencePortal referenceType="link">*/}
            {/*			<LinkField field="link" />*/}
            {/*			<ConfirmReferenceButton />*/}
            {/*		</EditorInlineReferencePortal>*/}
            {/*	</PopoverContent>*/}
            {/*</Popover>*/}
          </div>
          <div>
            <EditorElementTrigger
              elementType={paragraphElementType}
              suchThat={{ isNumbered: false }}
            >
              <Toggle>
                <PilcrowIcon className="h-3 w-3" />
              </Toggle>
            </EditorElementTrigger>
            <EditorElementTrigger
              elementType={headingElementType}
              suchThat={{ level: 1, isNumbered: false }}
            >
              <Toggle>
                <Heading1Icon className="h-3 w-3" />
              </Toggle>
            </EditorElementTrigger>
            <EditorElementTrigger
              elementType={headingElementType}
              suchThat={{ level: 2, isNumbered: false }}
            >
              <Toggle>
                <Heading2Icon className="h-3 w-3" />
              </Toggle>
            </EditorElementTrigger>
            <EditorElementTrigger
              elementType={headingElementType}
              suchThat={{ level: 3, isNumbered: false }}
            >
              <Toggle>
                <Heading3Icon className="h-3 w-3" />
              </Toggle>
            </EditorElementTrigger>
            <EditorElementTrigger elementType={unorderedListElementType}>
              <Toggle>
                <ListIcon className="h-3 w-3" />
              </Toggle>
            </EditorElementTrigger>
            <EditorElementTrigger elementType={orderedListElementType}>
              <Toggle>
                <ListOrderedIcon className="h-3 w-3" />
              </Toggle>
            </EditorElementTrigger>

            <EditorGenericTrigger {...createAlignHandler("start")}>
              <Toggle className="ml-4">
                <AlignLeftIcon className="h-3 w-3" />
              </Toggle>
            </EditorGenericTrigger>
            <EditorGenericTrigger {...createAlignHandler("end")}>
              <Toggle>
                <AlignRightIcon className="h-3 w-3" />
              </Toggle>
            </EditorGenericTrigger>
            <EditorGenericTrigger {...createAlignHandler("center")}>
              <Toggle>
                <AlignCenterIcon className="h-3 w-3" />
              </Toggle>
            </EditorGenericTrigger>
            <EditorGenericTrigger {...createAlignHandler("justify")}>
              <Toggle>
                <AlignJustifyIcon className="h-3 w-3" />
              </Toggle>
            </EditorGenericTrigger>
          </div>
        </EditorInlineToolbar>
        <EditorBlock name="quote" label="Quote">
          <RichText field="text" label="Quote" />
        </EditorBlock>
        <EditorBlock name="instagramEmbed" label="Instagram">
          <InputField field="text" label="Embed url" />
        </EditorBlock>
        <EditorBlock name="image" label="Image">
          <ImageField baseField={"image"} urlField="url" />
          <InputField field="image.description" label="Popis obrázku" />

        </EditorBlock>
        <EditorBlock name="imageList" label="Image list">
          <HasOne field="imageList">
            <DefaultRepeater field="items" sortableBy="order">
              <ImageField baseField={"image"} urlField="url" />
              <InputField field="image.description" label="Popis obrázku" />

              <RepeaterItemActions>
                <RepeaterRemoveItemButton />
              </RepeaterItemActions>
            </DefaultRepeater>
          </HasOne>
        </EditorBlock>
      </BlockEditorFieldBase>
    </div>
  )
);