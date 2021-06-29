from ipdb import set_trace as st
import os
import sys
import fitz
import tabula
import matplotlib.pyplot as plt


def main(fname):
    save_dir = os.path.dirname(fname)
    num = 0

    # image
    with fitz.open(fname) as doc:
        for i, page in enumerate(doc):
            for j, img in enumerate(page.getImageList()):
                num += 1
                x = doc.extractImage(img[0])
                save_path = f"{save_dir}/image{str(num).zfill(3)}.{x['ext']}"
                with open(save_path, "wb") as ofh:
                    ofh.write(x['image'])


    # table
    dfs = tabula.read_pdf(fname, lattice=True, pages='all')
    for df in dfs:
        # graphとか拾ってくる時があるので、nullが0の時のみ取得
        if (len(df)!=0) and (df.isnull().sum().sum()==0):
            num += 1
            save_path = f"{save_dir}/image{str(num).zfill(3)}.{x['ext']}"

            fig, ax =plt.subplots(1, 1)
            ax.axis('tight')
            ax.axis('off')
            ax.table(cellText=df.values, colLabels=df.columns, loc="center")
            plt.savefig(save_path)


if __name__ == "__main__":
    main(sys.argv[1])
