"use client";
import { useState, useEffect } from 'react'
import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export function Modal({ e }) {
    const { data, error, isLoading } = useSWR(`/data/arrays.txt`, fetcher)

    useEffect(() => {

        //const _r = await fetch(`/r/${rId}/_s/?_do=get&get=item&id=10`, { method: 'GET' });

        const exampleModal = document.getElementById('dModal')
        exampleModal.addEventListener('show.bs.modal', async event => {
            const button = event.relatedTarget
            const _size = button.getAttribute('_size')
            const modalDialog = exampleModal.querySelector('.modal-dialog').classList
            modalDialog.remove('modal-sm')
            modalDialog.remove('modal-lg')
            modalDialog.remove('modal-xl')
            modalDialog.add(_size)
        })
    }, [])

    return (
        <div class="modal fade" id="dModal" tabindex="-1" aria-labelledby="dModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="dModalLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {JSON.stringify(data)}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}



export function Offcanvas() {
    const { data, error, isLoading } = useSWR(`/data/arrays.txt`, fetcher)

    useEffect(() => {

        //const _r = await fetch(`/r/${rId}/_s/?_do=get&get=item&id=10`, { method: 'GET' });

        const dOffcanvas = document.getElementById('dOffcanvas')
        dOffcanvas.addEventListener('show.bs.modal', async event => {
            const button = event.relatedTarget
            const _i = button.getAttribute('_i')
            const modalDialog = exampleModal.querySelector('.modal-dialog').classList
            //modalDialog.remove('modal-sm')
            //modalDialog.remove('modal-lg')
            //modalDialog.remove('modal-xl')
            modalDialog.add(_size)
        })
    }, [])

    return (
        <div class="offcanvas offcanvas-start" tabindex="-1" id="dOffcanvas" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header border-bottom">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">00Offcanvas</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                {JSON.stringify(data)}
            </div>
            <div class="offcanvas-header border-top">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">00Offcanvas</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
        </div>
    )
}