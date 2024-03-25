<script setup>
import ModalWindow from '@/components/ModalWindow.vue'
import { useStore } from '@/stores/store'
import { computed, ref } from 'vue'

const store = useStore()

const userOptions = computed(() => {
    return store.getUser
})

const openModalRef = ref(null);

const callOpenFunction = () => {
    openModalRef.value.changeShow();
};

</script>

<template>
    <div class="user">
        <div class="user__message icon"></div>
        <div class="user__bell icon">
            <div class="count">6</div>
        </div>
        <div class="user__avatar" @click="callOpenFunction">
            <div class="avatar">
                <img :src="userOptions.avatarUrl" alt="avatar">
            </div>
            <div class="name">
                {{ userOptions.name }}
            </div>
        </div>
        <ModalWindow ref="openModalRef" />
    </div>
</template>

<style lang="scss" scoped>
.user {
    display: flex;
    align-items: center;
    margin-right: 10px;

    &__bell {
        position: relative;

        .count {
            position: absolute;
            right: -5px;
            top: -4px;
            color: rgb(255, 255, 255);
            font-size: 12px;
            font-weight: 700;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgb(30, 94, 255);
            padding: 1px 5px;
            border-radius: 10px;
        }
    }

    &__avatar {
        cursor: pointer;
        display: flex;
        align-items: center;
        margin-left: 30px;

        .avatar {
            display: flex;
            align-items: center;

            img {
                width: 40px;
                height: 40px;
                border-radius: 25px;
            }
        }

        .name {
            display: flex;
            align-items: center;
            color: rgb(90, 96, 127);
            font-size: 14px;
            font-weight: 500;
            margin-left: 15px;
        }
    }

    &__message {
        background: url(@/assets/icons/message.svg);
    }

    &__bell {
        margin-left: 10px;
        background: url(@/assets/icons/bell.svg);
    }

    .icon {
        width: 30px;
        height: 30px;
        background-repeat: no-repeat;
        background-position: center;
    }
}
</style>