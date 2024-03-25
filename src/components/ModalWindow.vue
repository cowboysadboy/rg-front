<script setup>
import ButtonElement from '@/components/UI/ButtonElement.vue'
import { useStore } from '@/stores/store'
import { ref } from 'vue'
import axios from 'axios';

const store = useStore()
store.fetchAvatar()

const showModal = ref(false);

const changeShow = () => {
    showModal.value = !showModal.value
}

defineExpose({ changeShow });

const handleFileDrop = async (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file.type.includes('image/')) {
        const formData = new FormData();
        formData.append('image', file);
        try {
            const response = await axios.post('https://api.imgbb.com/1/upload?key=731829f2c2dd2d497f969b1d4941a221', formData);
            store.changeAvatar(response.data.data.url)
            store.updateAvatar({ url: response.data.data.url })
            showModal.value = false;
        } catch (error) {
            console.error(error);
        }
    } else {
        alert('Необходимо загружать только картинки');
    }
};
</script>
<template>
    <div>
        <div v-if="showModal" class="modal">
            <div class="container">
                <div class="modal-content" @drop="handleFileDrop" @dragover.prevent>
                    <p>Перетащите картинку сюда</p>
                </div>
                <ButtonElement @click="changeShow">Отмена</ButtonElement>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.modal {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
        display: flex;
        flex-direction: column;
    }

    &-content {
        width: 300px;
        height: 200px;
        background: white;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
    }
}
</style>