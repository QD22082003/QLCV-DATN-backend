import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { DoiTac } from "./doiTacModel.js";
import { QuocGia } from "./quocGiaModel.js";
import { NganhNghe } from "./nganhNgheModel.js";
export const KhachHangCuoi = sequelize.define("KhachHangCuoi", {
    maKhachHang: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    tenVietTatKH: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    tenKhachHang: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    maDoiTac: {
        type: DataTypes.STRING,
        allowNull: true,
        references: {
            model: DoiTac,
            key: "maDoiTac",
        },
    },
    moTa: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    diaChi: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    sdt: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    nguoiLienHe: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    ghiChu: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    maQuocGia: {
        type: DataTypes.STRING,
        allowNull: true,
        references: {
            model: QuocGia,
            key: "maQuocGia",
        },
    },
    trangThai: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    ngayCapNhap: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    maKhachHangCu: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    maNganhNghe: {
        type: DataTypes.STRING,
        allowNull: true,
        references: {
            model: NganhNghe,
            key: "maNganhNghe",
        },
    },
    maNhanSuCapNhap: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    daXoa: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },

}, {
    timestamps: true,
    tableName: "KhachHangCuoi",
});
