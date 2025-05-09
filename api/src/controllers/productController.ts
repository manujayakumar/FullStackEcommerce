interface data {
    id: number,
    fName: string,
    lName: string
}
type id = number
export const  getAll = ()=> {
    return "This function retrieve all datas"
};

export const getProduct = (id: id) => {
    return {
        id,
        fName: "first",
        lName: "last"
    }
}

export const createProduct = (data: data) => {
    return data;
}

export const updatProduct = (data: data) => {
    return data;
}

export const deleteProduct=(id: id) => {
    return id;
}