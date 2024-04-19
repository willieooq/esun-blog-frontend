<template>
    <h3>文章{{ id }}</h3>
    <CommentView />
    <AddComment />
</template>
<script>
import CommentView from '@/components/CommentView';
import AddComment from '@/components/AddComment'; // add this
export default {
    props: ['id'],
    components: { AddComment, CommentView },
}
</script>