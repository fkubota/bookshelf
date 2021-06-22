from ipdb import set_trace as st
import os
import sys
import fitz


def main(fname):
    # st()
    save_dir = os.path.dirname(fname)
    num = 0
    with fitz.open(fname) as doc:
        for i, page in enumerate(doc):
            for j, img in enumerate(page.getImageList()):
                num += 1
                x = doc.extractImage(img[0])
                save_path = f"{save_dir}/image{str(num).zfill(3)}.{x['ext']}"
                with open(save_path, "wb") as ofh:
                    ofh.write(x['image'])


if __name__ == "__main__":
    main(sys.argv[1])
