<template>
  <q-page class="q-pa-xs bg-grey-3">
    <q-table :rows="books" dense :rows-per-page-options="[15, 0]" :columns="columns" :filter="filter" :wrap-cells="true">
      <template v-slot:top-right>
        <q-btn label="Nuevo libro"  icon="add_circle_outline" @click="bookNew" no-caps color="green"/>
        <q-input v-model="filter" debounce="300" placeholder="Buscar" dense outlined>
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template v-slot:body-cell-image="props">
        <q-td :props="props">
          <q-img :src="$url+'uploads/'+props.row.image" style="width: 22px; height: 22px" />
        </q-td>
      </template>
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn flat dense size="10px" icon="o_edit" @click="editBook(props.row)">
            <q-tooltip>Editar libro</q-tooltip>
          </q-btn>
          <q-btn flat dense size="10px" icon="o_delete" @click="deleteBook(props.row)">
            <q-tooltip>Eliminar libro</q-tooltip>
          </q-btn>
          <q-btn flat dense size="10px" icon="o_image" @click="changeImage(props.row)">
            <q-tooltip>Cambiar imagen</q-tooltip>
          </q-btn>
          <input type="file" ref="fileInput" style="display: none;" @change="handleFileChange" accept="image/*">
        </q-td>
      </template>
    </q-table>
    <q-dialog v-model="bookDialog" persistent>
      <q-card style="width: 400px" flat bordered>
        <q-card-section>
          <q-card>
            <q-card-section class="row items-center q-pb-none">
              <div class="text-h6">{{ bookOption === 'create' ? 'Nuevo libro' : 'Editar libro' }}</div>
              <q-space />
              <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>
            <q-card-section>
              <q-form @submit="bookSave">
                <q-input v-model="book.name" label="Nombre" outlined dense :rules="[val => val.length > 2 || 'El nombre debe tener al menos 3 caracteres']"/>
                <q-input v-model="book.description" label="Descripción" outlined dense hint="Descripción del libro"/>
                <q-input v-model="book.indice" label="Índice" outlined dense hint="Índice del libro"/>
                <q-input v-model="book.price" label="Precio" outlined dense :rules="[val => val > 0 || 'El precio debe ser mayor a 0']"/>
                <q-input v-model="book.priceOffer" label="Precio de oferta" outlined dense :rules="[val => val >= 0 || 'El precio de oferta debe ser mayor o igual a 0']"/>
                <q-input v-model="book.stock" label="Stock" outlined dense :rules="[val => val >= 0 || 'El stock debe ser mayor o igual a 0']"/>
                <q-input v-model="book.author" label="Autor" outlined dense :rules="[val => val.length > 2 || 'El autor debe tener al menos 3 caracteres']"/>
                <q-select v-model="book.categoryId" :options="categories" label="Categoría" outlined dense emit-value map-options
                          option-value="id" option-label="name" :rules="[val => val !== null || 'Debes seleccionar una categoría']"/>
<!--                <pre>{{categories}}</pre>-->
                <q-btn label="Guardar" color="primary" type="submit" class="full-width" no-caps/>
              </q-form>
            </q-card-section>
          </q-card>
        </q-card-section>
      </q-card>
    </q-dialog>
    <pre>{{books}}</pre>
  </q-page>
</template>
<script>
export default {
  name: 'BooksPage',
  data () {
    return {
      books: [],
      book: {},
      filter: '',
      bookDialog: false,
      bookOption: '',
      categories: [],
      columns: [
        { name: 'actions', align: 'center', label: 'Acciones', sortable: false },
        { name: 'image', align: 'left', label: 'Imagen', field: 'image', sortable: true },
        { name: 'name', required: true, label: 'Nombre', align: 'left', field: row => row.name, format: val => `${val}`, sortable: true },
        { name: 'description', align: 'left', label: 'Descripción', field: 'description', sortable: true },
        // { name: 'indice', align: 'left', label: 'Índice', field: 'indice', sortable: true },
        { name: 'price', align: 'left', label: 'Precio', field: 'price', sortable: true },
        { name: 'priceOffer', align: 'left', label: 'Precio de oferta', field: 'priceOffer', sortable: true },
        { name: 'stock', align: 'left', label: 'Stock', field: 'stock', sortable: true },
        { name: 'author', align: 'left', label: 'Autor', field: 'author', sortable: true }
      ]
    }
  },
  mounted () {
    this.booksGet()
    this.categoriesGet()
  },
  methods: {
    deleteBook (book) {
      this.$q.dialog({
        title: 'Eliminar libro',
        message: '¿Estás seguro de eliminar el libro?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$axios.delete('books/' + book.id).then(response => {
          this.booksGet()
        }).catch(error => {
          console.log(error.response.data.message)
          this.$alert.error(error.response.data.message)
        })
      })
    },
    editBook (book) {
      this.bookDialog = true
      this.bookOption = 'edit'
      this.book = { ...book }
      this.book.categoryId = book.category.id
    },
    bookSave () {
      if (this.bookOption === 'create') {
        this.$axios.post('books', this.book).then(response => {
          this.booksGet()
          this.bookDialog = false
        }).catch(error => {
          console.log(error.response.data.message)
          this.$alert.error(error.response.data.message)
        })
      } else {
        this.$axios.put('books/' + this.book.id, this.book).then(response => {
          this.booksGet()
          this.bookDialog = false
        }).catch(error => {
          console.log(error.response.data.message)
          this.$alert.error(error.response.data.message)
        })
      }
    },
    categoriesGet () {
      this.$axios.get('categories').then(response => {
        this.categories = response.data
      }).catch(error => {
        console.log(error.response.data.message)
        this.$alert.error(error.response.data.message)
      })
    },
    changeImage (book) {
      this.book = book
      this.$refs.fileInput.click()
    },
    handleFileChange (event) {
      const file = event.target.files[0]
      if (!file) {
        return
      }
      const formData = new FormData()
      formData.append('file', file)
      this.$axios.post('books/upload/' + this.book.id, formData).then(response => {
        // this.booksGet()
        this.book.image = response.data.image
      }).catch(error => {
        console.log(error.response.data.message)
        this.$alert.error(error.response.data.message)
      })
    },
    bookNew () {
      this.bookDialog = true
      this.bookOption = 'create'
      this.book = {
        name: '',
        description: '',
        image: '',
        indice: '',
        price: 0,
        priceOffer: 0,
        stock: 0,
        author: '',
        categoryId: 1
      }
    },
    booksGet () {
      this.$axios.get('books/all').then(response => {
        this.books = response.data
      }).catch(error => {
        console.log(error.response.data.message)
        this.$alert.error(error.response.data.message)
      })
    }
  }
}
</script>
