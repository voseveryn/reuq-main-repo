import { Binding, PersistButton } from "~/lib/binding";
import { Slots } from "~/lib/layout";
import { PageForm } from "../components/forms/page-form";
import {
  EntitySubTree,
  Field,
  Link,
  RedirectOnPersist,
} from "@contember/interface";
import { AnchorButton, Button } from "~/lib/ui/button";
import { BackButton } from "~/lib/buttons";
import {
  DataGrid,
  DataGridColumn,
  DataGridDateColumn,
  DataGridHasManyColumn,
  DataGridLoader,
  DataGridPagination,
  DataGridQueryFilter,
  DataGridTable,
  DataGridToolbar,
} from "~/lib/datagrid";
import { SquarePenIcon } from "lucide-react";
import { ProductForm } from "../components/forms/product-form";

export const Create = () => {
  return (
    <>
      <Binding>
        <Slots.Actions>
          <PersistButton label="Uložit" />
        </Slots.Actions>
        <Slots.Title>Vytvořit stránku</Slots.Title>
        <Slots.Back>
          <BackButton />
        </Slots.Back>
        <EntitySubTree entity="Product" isCreating>
          <RedirectOnPersist to="products/edit(id: $entity.id)" />
          <ProductForm />
        </EntitySubTree>
      </Binding>
    </>
  );
};

export const Edit = () => {
  return (
    <>
      <Binding>
        <Slots.Actions>
          <PersistButton label="Uložit" />
        </Slots.Actions>
        <Slots.Title>Upravit stránku</Slots.Title>
        <Slots.Back>
          <BackButton />
        </Slots.Back>
        <EntitySubTree entity="Product(id = $id)">
          <ProductForm />
        </EntitySubTree>
      </Binding>
    </>
  );
};

export default () => {
  return (
    <>
      <Binding>
        <Slots.Actions>
          <Link to="products/create">
            <AnchorButton>Vytvořit Produktů</AnchorButton>
          </Link>
        </Slots.Actions>
        <Slots.Title>Seznam Produktů</Slots.Title>
        <Slots.Back>
          <BackButton />
        </Slots.Back>
        <>
          <DataGrid entities="Product">
            <DataGridToolbar>
              <DataGridQueryFilter />
            </DataGridToolbar>
            <DataGridLoader>
              <DataGridTable>
                <DataGridColumn>
                  <div className="flex gap-4">
                    <Link to="products/edit(id: $entity.id)">
                      <Button variant="outline">
                        <SquarePenIcon size={16} />
                      </Button>
                    </Link>
                  </div>
                </DataGridColumn>
                <DataGridHasManyColumn header="Název" field="locales">
                  <Field field="title" />
                </DataGridHasManyColumn>
              </DataGridTable>
            </DataGridLoader>
            <DataGridPagination />
          </DataGrid>
        </>
      </Binding>
    </>
  );
};
